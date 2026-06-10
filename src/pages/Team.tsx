import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Sheun",
    role: "Founder & E-commerce Architect",
    image: "https://i.postimg.cc/wxQgVCcf/1000031270-removebg-preview.png",
    bio: "Visionary behind Sheun Hub with over a decade of experience scaling 7-figure Shopify brands.",
  },
  {
    name: "Henrik",
    role: "Lead Full-Stack Developer",
    image: "https://plain-weur-prod-public.komododecks.com/202606/10/X0crrWmNJb7QhmJkiPub/image.png",
    bio: "Specializes in custom Shopify Liquid themes and seamless third-party app integrations.",
  },
  {
    name: "Georgina",
    role: "UX/UI Design Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    bio: "Crafts high-converting, user-centric e-commerce experiences with modern design principles.",
  },
  {
    name: "Mary",
    role: "Digital Marketing & SEO Lead",
    image: "https://st2.depositphotos.com/1028879/11568/i/450/depositphotos_115685976-stock-photo-business-woman-welcomes-you.jpg",
    bio: "Drives organic and paid traffic that converts, turning store visitors into loyal customers.",
  },
  {
    name: "Florian",
    role: "Performance Optimization Specialist",
    image: "https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "Obsessed with site speed, reducing load times to maximize conversion rates and SEO.",
  },
  {
    name: "Sarah",
    role: "Client Success Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    bio: "Ensures every project is delivered on time, exceeding expectations and business goals.",
  },
  {
    name: "David",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    bio: "Builds pixel-perfect interfaces, ensuring seamless functionality across all devices.",
  }
];

export default function Team() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-offwhite">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
            Meet Our Team
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
            The Experts Behind Your <span className="italic font-serif font-light text-navy/40">Success</span>.
          </h1>
          <p className="text-xl text-navy/60 leading-relaxed">
            We are a collective of developers, designers, and e-commerce strategists dedicated to building high-performing Shopify stores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-navy/5 hover:border-green/20"
            >
              <div className="relative mb-8 overflow-hidden rounded-2xl aspect-square">
                <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">{member.name}</h3>
              <p className="text-green font-medium mb-4 text-sm uppercase tracking-wider">{member.role}</p>
              <p className="text-navy/60 leading-relaxed mb-6 h-20">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to work with us?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
            Let's collaborate to build an e-commerce experience that drives growth and elevates your brand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-green text-navy px-8 py-4 rounded-xl font-bold hover:bg-white hover:-translate-y-1 transition-all duration-300 relative z-10 shadow-[0_0_40px_rgba(0,255,157,0.3)]"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
