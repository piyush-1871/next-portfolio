import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex rounded-lg justify-between
      space-y-7 flex-shrink-0 w-[450px]
    snap-center bg-[#292929]
     p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity
     duration-200 overflow-hidden
    ">
     

      <div className="px-0 md:px-10">
        <h2 className="text-4xl font-light">CEO of ...</h2>
        <p className="flex space-x-2 my-2">XYZ</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src=
            "data:image/png;base64,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"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src=
            "data:image/png;base64,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"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src=
            "data:image/png;base64,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"
            alt=""
          />
          
        </div>
        <p className="uppercase py-5 text-gray-300">Started - Ended</p>
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
        className="w-32 h-32 rounded-full
        md:rounded-full
        object-cover object-center"
        src="data:image/jpeg;base64,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fgQVDeinDe9P42+VWQtr4UnnpjocTqscm0iEmrtTS2nqoY52OpzWylzNMgFPpef9UB17gcSVz4ficAibofGXNZSGYGdsTXQika3S/ouMjQ7UCwC9yFK+ijDu9P42+VPRThven8bfKnMpx1fp7nPLu+y9SvYTUCqZR0ssoMMtMWlusEslgmMhu3iPs2ht1AYDiZmra2Zr2xzTRzc2e9waGyOkaQA4+qdGoArS8P5PqOnEgifM3aNLHnUwnQeIBLLt3di6nopw3vT+NvlXavqXEt9+nrkh02vHT5/RTs4YuHUckTZmucZqcTaHAiR4p7yvAHEbRo39oXZdVUHNzh+0dtOaAX1R8324/wD07nXvq1kt+itHoow3vT+NvlT0U4d3p/G3ypzqcJZZHJuy3sRlPWRxVL5RURAT1NO5lpW32ZppW3cL3aNRtvXVgrg1jDLURGAQxxuj2jCefioBfJp6zq1P18LKc9FGG96fxt8q++ijDu9P42+Vc82r7v09zrl2/ZepAvzCXv0PqGljpsVa4F7bGHZHYtP7Nzu6l2qbFo2SMeaiPYOkoRRMD23iaG6Zbt/4Y0lzTfjdSnoow7vT+NvlXz0UYb3p/G3ypzKMY39EFXd49SBhr4S6OCsmY4bLaSO1tf8Abw1ckmm9+LmF49twuriuMMmw1z7tIkiO0aZ2i1S6oLyRAGFxf16rgaVafRThven8bfKnopw3vT+NvlU82nOd+uehDqux29SmZWlccOayPmReKiUubVlm5pjjsWh3uK5KHEhHTQ07pWaObYmJWB7dLn6pNAP+3v3cVb/RThven8bfKnopw7vT+NvlUu+l56779PchU2rG3+/Y6YrBrdI6ojdCaiIwAPFoojTTBrHX/wAvs09oPaozD8ah1aJ5WGFkeEljS5pa14LNZA7R1+wb+CuWK5Mgqo2xzSzOaCDxjaXODdIc9wZd5A3XKi/RThven8bfKq42VY+rPzG/52LJV252x87fghf8QZzgtc4bfmz2seKxhkN5w7SajZhrHab249HduXWGP7N32MkDNeIvdINpeNzdlFcl4aDoLwTq02v7lY/RRhven8bfKvvopw3vT+NvlXXMp8+nuc8u7x6lIzDNH/iNC8yEkGHaNfM2bY2mJ0mYesLb95JF1N4bjdO2WGGSRmykqq17jqbZkjKhkkDz2A2Iv2OKnPRThven8bfKvnoow7vT+NvlXTupcVFt+hyqbU20kVeliikFDOaiBjKaoqpJdUrQ7TzgPGlg3uuG/VfcPxGltS1UjwBDHXv0tczaB8k7gxrWk+tZ+oe66tHopw3vT+NvlT0U4d3p/G3yqXfU+79Pz58scm1dl8x/SOrkuWnmr46inc4tfRFjhIW7UPiljZeQNO4lulFP5ayXSYfK6WAyFzmlh1uBGm4PUBv6IRY7ZRcvp6eTXVGSj9XXwWdERVloREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q=="
        alt="organization-logo"
      />
    </article>
  );
}

export default ExperienceCard;
