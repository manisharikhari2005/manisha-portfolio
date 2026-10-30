// const Footer = () => {
//   return (
//     <footer
//       id="contact"
//       className="border-t border-[var(--border)] px-4 py-10 sm:px-6"
//     >
//       <div className="mx-auto max-w-6xl">
//         {/* Main Footer */}
//         <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
//           {/* Identity */}
//           <div>
//             <div className="flex items-center gap-3">
//               {/* MR Logo */}
//               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">
//                 MR
//               </div>

//               <span className="text-sm font-semibold text-[var(--text-primary)]">
//                 Manisha Rikhari
//               </span>
//             </div>

//             <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
//               Building thoughtful interfaces and learning something new with
//               every project.
//             </p>
//           </div>

//           {/* Links */}
//           <div className="flex flex-wrap items-center gap-5">
//             <a
//               href="https://www.linkedin.com/in/manisha-rikhari-a61a172a5"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--primary)]"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="https://github.com/manisharikhari2005"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--primary)]"
//             >
//               GitHub
//             </a>

//             <a
//               href="mailto:manisharikhari011005@gmail.com"
//               className="text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--primary)]"
//             >
//               Email
//             </a>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)] pt-5 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
//           <p>© 2026 Manisha Rikhari. All rights reserved.</p>

//           <p>Designed & built with Next.js</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--border)] px-4 py-10 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Main Footer */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-white">
                MR
              </div>

              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Manisha Rikhari
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
              Building thoughtful interfaces and learning something new with
              every project.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manisha-rikhari-a61a172a5"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--primary)]"
            >
              <FaLinkedinIn size={17} />

              <span className="text-xs text-[var(--text-secondary)]">
                manisha rikhari
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/manisharikhari2005"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--primary)]"
            >
              <FaGithub size={18} />

              <span className="text-xs text-[var(--text-secondary)]">
                manisharikhari2005
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:manisharikhari011005@gmail.com"
              className="group flex items-center gap-3 text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--primary)]"
            >
              <Mail size={18} />

              <span className="text-xs text-[var(--text-secondary)]">
                manisharikhari011005@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)] pt-5 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Manisha Rikhari. All rights reserved.</p>

          <p>Designed & built with Next.js</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
