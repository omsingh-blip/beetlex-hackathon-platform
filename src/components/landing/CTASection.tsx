import { ArrowRight, Rocket } from "lucide-react";

import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="
            glass
            relative
            overflow-hidden
            rounded-3xl
            border
            border-border
            px-8
            py-16
            text-center
            md:px-16
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              left-1/2
              top-0
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-primary/10
              blur-[100px]
            "
          />

          <div className="relative">
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-border
                bg-surface
                px-4
                py-2
              "
            >
              <Rocket
                size={16}
                className="text-primary"
              />

              <span className="text-sm text-muted">
                Build. Compete. Win.
              </span>
            </div>

            <h2
              className="
                mx-auto
                max-w-3xl
                text-4xl
                font-bold
                leading-tight
                md:text-6xl
              "
            >
              Ready to Build the Future?
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-muted
              "
            >
              Join hundreds of builders creating AI,
              Web3, and next-generation products.
              Compete for prizes, mentorship, and
              recognition.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <Button
                className="
                  bg-primary
                  text-black
                "
              >
                Register Now
              </Button>

              <Button
                variant="outline"
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                Explore Events

                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}