import PlanCard from "./PlanCard";

const plans = [
    {
        id: "guard-monthly",
        name: "Guard+ Monthly",
        price: "₹149",
        duration: "1 Month",
        features: [
            "Advanced opportunity verification",
            "AI-powered opportunity matching",
            "Premium security insights",
        ],
    },
    {
        id: "guard-six-month",
        name: "Guard+ 6 Months",
        price: "₹699",
        duration: "6 Months",
        features: [
            "Advanced opportunity verification",
            "AI-powered opportunity matching",
            "Premium security insights",
        ],
    },
    {
        id: "guard-yearly",
        name: "Guard+ Yearly",
        price: "₹1,199",
        duration: "1 Year",
        features: [
            "Advanced opportunity verification",
            "AI-powered opportunity matching",
            "Premium security insights",
        ],
    },
];

export default function PlanSelector({
    selectedPlan,
    onPlanChange,
}) {
    return (
        <div className="plan-selector">
            <label className="free-plan-option">
                <input
                    type="radio"
                    name="plan"
                    value="free"
                    checked={selectedPlan === "free"}
                    onChange={() => onPlanChange("free")}
                />

                Continue with Free
            </label>

            <p className="plan-selector-note">
                Free features are available to everyone. Upgrade to Guard+ for
                premium features.
            </p>

            <div className="plan-cards">
                {plans.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        name={plan.name}
                        price={plan.price}
                        duration={plan.duration}
                        features={plan.features}
                        selected={selectedPlan === plan.id}
                        onSelect={() => onPlanChange(plan.id)}
                    />
                ))}
            </div>
        </div>
    );
}