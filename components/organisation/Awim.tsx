import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex rounded-lg justify-between
      space-y-7 flex-shrink-0 w-[450px]
    snap-center bg-[#292929]
     p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity
     duration-200 
    "
    >
      <div className="px-0 md:px-10">
        <h2 className="text-4xl font-light">College Volunteer</h2>
        <p className="flex space-x-2 my-2">AWIM | SAENIS | MARUTI SUZUKI</p>

        <p className="uppercase py-5 text-gray-300">July(2022) - Nov(2022)</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Imparted STEM knowledge to 5th Graders.</li>
          <li>Helped in debugging the basic problem.</li>
          <li>Helped in building the models.</li>
        </ul>
      </div>
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full
        md:rounded-full
        object-cover object-center"
        src="data:image/jpeg;base64,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fgQVDeinDe9P42+VWQtr4UnnpjocTqscm0iEmrtTS2nqoY52OpzWylzNMgFPpef9UB17gcSVz4ficAibofGXNZSGYGdsTXQika3S/ouMjQ7UCwC9yFK+ijDu9P42+VPRThven8bfKnMpx1fp7nPLu+y9SvYTUCqZR0ssoMMtMWlusEslgmMhu3iPs2ht1AYDiZmra2Zr2xzTRzc2e9waGyOkaQA4+qdGoArS8P5PqOnEgifM3aNLHnUwnQeIBLLt3di6nopw3vT+NvlXavqXEt9+nrkh02vHT5/RTs4YuHUckTZmucZqcTaHAiR4p7yvAHEbRo39oXZdVUHNzh+0dtOaAX1R8324/wD07nXvq1kt+itHoow3vT+NvlT0U4d3p/G3ypzqcJZZHJuy3sRlPWRxVL5RURAT1NO5lpW32ZppW3cL3aNRtvXVgrg1jDLURGAQxxuj2jCefioBfJp6zq1P18LKc9FGG96fxt8q++ijDu9P42+Vc82r7v09zrl2/ZepAvzCXv0PqGljpsVa4F7bGHZHYtP7Nzu6l2qbFo2SMeaiPYOkoRRMD23iaG6Zbt/4Y0lzTfjdSnoow7vT+NvlXz0UYb3p/G3ypzKMY39EFXd49SBhr4S6OCsmY4bLaSO1tf8Abw1ckmm9+LmF49twuriuMMmw1z7tIkiO0aZ2i1S6oLyRAGFxf16rgaVafRThven8bfKnopw3vT+NvlU82nOd+uehDqux29SmZWlccOayPmReKiUubVlm5pjjsWh3uK5KHEhHTQ07pWaObYmJWB7dLn6pNAP+3v3cVb/RThven8bfKnopw7vT+NvlUu+l56779PchU2rG3+/Y6YrBrdI6ojdCaiIwAPFoojTTBrHX/wAvs09oPaozD8ah1aJ5WGFkeEljS5pa14LNZA7R1+wb+CuWK5Mgqo2xzSzOaCDxjaXODdIc9wZd5A3XKi/RThven8bfKq42VY+rPzG/52LJV252x87fghf8QZzgtc4bfmz2seKxhkN5w7SajZhrHab249HduXWGP7N32MkDNeIvdINpeNzdlFcl4aDoLwTq02v7lY/RRhven8bfKvvopw3vT+NvlXXMp8+nuc8u7x6lIzDNH/iNC8yEkGHaNfM2bY2mJ0mYesLb95JF1N4bjdO2WGGSRmykqq17jqbZkjKhkkDz2A2Iv2OKnPRThven8bfKvnoow7vT+NvlXTupcVFt+hyqbU20kVeliikFDOaiBjKaoqpJdUrQ7TzgPGlg3uuG/VfcPxGltS1UjwBDHXv0tczaB8k7gxrWk+tZ+oe66tHopw3vT+NvlT0U4d3p/G3yqXfU+79Pz58scm1dl8x/SOrkuWnmr46inc4tfRFjhIW7UPiljZeQNO4lulFP5ayXSYfK6WAyFzmlh1uBGm4PUBv6IRY7ZRcvp6eTXVGSj9XXwWdERVloREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q=="
        alt="organization-logo"
      />
    </article>
  );
}

export default ExperienceCard;
