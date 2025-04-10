import Cal, { getCalApi } from "@calcom/embed-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME || "your-username";

export default function BookingCalendar({ isOpen, onClose, formData = {} }) {
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#D4AF37",
          },
        },
      });

      window.addEventListener("cal:bookingSuccessful", () => {
        setTimeout(() => {
          router.push("/");
        }, 1000);
      });

      return () => {
        window.removeEventListener("cal:bookingSuccessful", () => {});
      };
    })();
  }, [router]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal container */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-[#F9F8F4] rounded-2xl shadow-xl w-full max-w-4xl p-6 sm:p-8 overflow-hidden">
              {/* Header */}
              <div className="text-center mb-6">
                <img
                  src="/logo1.png"
                  alt="Logo"
                  className="w-32 sm:w-44 mx-auto mb-4"
                />
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
                  Find a time to meet with a coach from Prestige Women's Coaching
                </h2>
              </div>

              {/* Calendar Embed */}
              <div className="w-full h-[600px] sm:h-[700px] overflow-auto">
                <Cal
                  calLink={CAL_USERNAME}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  config={{
                    name: formData.name || "Transformation Call",
                    email: formData.email || "",
                    hideEventTypeDetails: false,
                    layout: "month_view",
                    theme: "light",
                    bookingFields: ["name", "email", "phone"],
                    timeFormat: "12h",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
