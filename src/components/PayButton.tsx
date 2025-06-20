import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

type PayButtonProps = {
    text: string;
    popular?: boolean;
    amount: number;
    description: string;
};

export default function PayButton({ text, popular, amount, description }: PayButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);

        try {
            const res = await fetch("https://coach-back-2nvwvq.fly.dev/create-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, description }),
            });

            if (!res.ok) throw new Error("Ошибка при создании платежа");

            const data = await res.json();

            // Создание и отправка формы
            const form = document.createElement("form");
            form.method = "POST";
            form.action = "https://payeer.com/merchant/";
            form.style.display = "none";

            const fields = [
                "m_shop",
                "m_orderid",
                "m_amount",
                "m_curr",
                "m_desc",
                "m_sign"
            ];

            fields.forEach((field) => {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = field;
                input.value = data[field];
                form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();
        } catch (err) {
            console.error(err);
            alert("Ошибка при оплате");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleClick}
            disabled={loading}
            className={`w-full py-2.5 rounded ${
                popular ? "bg-white text-black" : "border border-white text-white"
            } flex items-center justify-center ${loading ? "opacity-50" : ""}`}
        >
            <span>{loading ? "Загрузка..." : text}</span>
            <ArrowRight className="ml-2 w-4 h-4" />
        </motion.button>
    );
}
