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

      // ✅ Listen for successful booking event
      window.addEventListener("cal:bookingSuccessful", () => {
        // Optional: add a small delay for UX
        setTimeout(() => {
          router.push("/");
        }, 1000);
      });

      // Cleanup on unmount
      return () => {
        window.removeEventListener("cal:bookingSuccessful", () => {});
      };
    })();
  }, [router]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-[#F9F8F4] rounded-2xl shadow-xl w-full max-w-4xl p-8">
              <div className="text-center mb-6">
                <img src="/logo1.png" alt="Logo" className="w-44 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-black mb-2">
                  Find a time to meet with a coach from Prestige Women's Coaching
                </h2>
              </div>

              <Cal
                calLink={CAL_USERNAME}
                style={{ width: "100%", height: "700px", overflow: "scroll" }}
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
      )}
    </>
  );
}
