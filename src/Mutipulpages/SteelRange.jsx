import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"
import s4 from "../assets/s4.png"
import s5 from "../assets/s5.png"
import s6 from "../assets/s6.png"

const products = [
    { title: "Hot Rolled Sheet", icon: s1, dcrib: "Hot Rolled Sheets are durable steel products made by rolling steel at high temperatures. ideal for construction, fabrication, and industrial applications." },
    { title: "Railway Product", icon: s2, dcrib: "Railway products are strong and durable steel components used in the construction of railway tracks, coaches, and related infrastructure." },
    { title: "Chequered Plate", icon: s3, dcrib: "Chequered plates are steel plates with a raised pattern that provide better grip and are widely used for flooring, stairs, and industrial platforms." },
    { title: "Hot Rolled Coil", icon: s4, dcrib: "Hot Rolled Coils are steel coils produced by rolling steel at high temperatures, commonly used in construction, manufacturing, and heavy engineering applications." },
    { title: "Equal Angle Iron", icon: s5, dcrib: "Equal Angle Irons are L-shaped steel sections with equal sides, widely used in construction, frameworks, and structural support applications." },
    { title: "Steel Pipes", icon: s6, dcrib: "Steel pipes are hollow steel products used for transporting fluids and gases, and for structural support in construction and industrial applications." }
];

const features = [
    "Exceptional Strength",
    "Durability",
    "Versatility",
    "Recyclability",
    "Cost-Effectiveness",
    "Global Availability",
];

export default function SteelRange() {
    return (
        <section className="bg-black text-white px-6 md:px-20 py-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                <div className="grid sm:grid-cols-2 gap-12">
                    {products.map((p, i) => (
                        <div key={i}>
                            <img
                                src={p.icon}
                                alt={p.title}
                                className="w-12 h-12 mb-3 object-contain blue-icon"
                            />


                            <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {p.dcrib}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-blue-500 tracking-widest text-sm font-semibold mb-4">
                        OUR RANGE
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Innovative Steel Solutions for Every Industry
                    </h2>

                    <p className="text-gray-400 mb-10 leading-relaxed">
                        Innovative steel solutions designed to serve every industry with unmatched strength, durability, and precision. Our products support a wide range of applications, from construction and infrastructure to manufacturing and heavy engineering, ensuring reliability, efficiency, and long-term performance in every project.
                        Innovative steel solutions designed to serve every industry with unmatched strength, durability, and precision. Our products support a wide range of applications, from construction and infrastructure to manufacturing and heavy engineering, ensuring reliability, efficiency, and long-term performance in every project.
                        We provide innovative steel solutions tailored to the unique demands of every industry, delivering unmatched strength, durability, and precision. From construction and infrastructure to automotive, manufacturing, and heavy engineering, our high-quality steel products are engineered to perform under the most challenging conditions. With a focus on advanced technology, sustainable practices, and client-centric services, we ensure every project achieves maximum efficiency, safety, and long-term value. Our expertise, reliability, and commitment to excellence make us a trusted partner for businesses seeking steel solutions that drive growth and innovation.
                    </p>

                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {features.map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm">
                                <span className="text-blue-500 text-lg">◉</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
