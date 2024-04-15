import {
  Document,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import { createTw } from "react-pdf-tailwind";

export const tw = createTw({
  theme: {},
  extend: {},
});

const TermsPDF = () => {
  return (
    <>
      <Document>
        <Page style={tw("py-8 px-16")}>
          <Text style={tw("text-center sm:text-3xl font-semibold")}>
            Terms and Conditions
          </Text>
          <Text style={tw("text-[18px] font-bold py-4")}>
            Welcome to GeneHub!
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify text-justify")}>
            The GeneHub website (the “Site”) is comprised of various web pages
            operated by SincePowere Publishing House, LLC (SPPH, LLC). GeneHub
            is offered to you conditioned on your acceptance without
            modification of the terms, conditions, and notices continued herein
            (the “Term”). Your use of GeneHub constitutes your agreement to all
            such Terms. Please read these terms carefully and keep a copy of
            them for your reference if needed.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            <Text>Privacy:</Text> Your use of GeneHub is subject to SPPH, LLC’s Privacy
            Policy. Please review our Privacy Policy, which also governs the
            Site and informs users of our data collection practices.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Electronic Communication: Visitin GeneHub or sending email to
            GeneHub constitutes electronic communications. You consent to
            receive electronic communications and you agree that all agreements,
            notices, disclosures, and other communications that we provide you
            electronically, via email and on the Site, satisfy any legal
            requirement that such communications be in writing.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Your Account: If you use this site, you are responsible for
            maintaining the confidentiality of your account and password and for
            restricting access to your computer, and you agree to accept
            responsibility for all activities that occur under your account
            password. You may not assign or otherwise transfer your account to
            any other person or entity. You acknowledge that SPPH, LLC is not
            responsible for third party access to your account that results from
            theft or misappropriation of your account. SPPH, LLC and its
            associates reserve the right to refuse or cancel service, terminate
            accounts, or remove or edit content in our sole discretion.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Links to Third Party Sites/Third Party Services. GeneHub may contain
            links to other websites (“Link Sites”). The linked Sites are not
            under control SPPH, LLC and SPPJ, LLC is not responsible for the
            contents of any Linked Site, including without limitation and link
            contained in a Linked Site, or any changes or updates to a Linked
            Site. GeneHub is providing these links to you only as a convenience,
            and the inclusion of any link does not imply endorsement by SPPH,
            LLC of the site or any association with its operators.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Certain services made available vis SPPH, LLC are delivered by third
            party sites and organizations. By using any product, service, or
            functionality originating from the SPPH, LLC domain, you hereby
            acknowledge and consent that SPPH, LLC may share such information
            and data with any third party with whom SPPH, LLC has a contractual
            relationship to provide the requested product, service, or
            functionality on behalf of SPPH, LLC users and customers.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            No Unlawful or Prohibited Use/Intellectual Property: You are granted
            a non-exclusive, non-transferable, revocable license to access and
            use GenHub strictly in accordance with these terms of use. As a
            condition of your use of the Site, you warrant to SPPH, LLC that you
            will not use the Site for any purpose that is unlawful or prohibited
            by these Terms. You may not use the Site in any manner which could
            damage, disable, overburden, or impair the Site or interfere with
            any other party’s use and enjoyment of the Site. You may not obtain
            any materials or information through any means not intentionally
            made available or provided for through the Site.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            All content including as part of the Service, such as text, logos,
            images, as well as the compilation thereof, any software used on the
            Site, is the property of SPPH, LLC or its suppliers and protected by
            copyright and other laws that protect intellectual property and
            proprietary rights. You agree to observe and abide by all copyright
            and other proprietary notices, legends or other restrictions
            contained in any such content and will not make any changes thereto.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            You will not modify, publish, transmit, reverse, participate in the
            transfer or sale, create derivative works, or in any way exploit any
            of the content, in whole or in part, found on the Site. GeneHb
            content is not for resale. Your use of the Site does not entitle you
            to make any unauthorized use of any protected content solely for
            your personal use and will make on other use of the content without
            the express written permission of SPPH, LLC and the copywrite owner.
            You agree that you do not acquire any ownership right in any
            protected content. We do not grant you any licenses, express or
            implied, to the intellectual property of SPPH, LLC or our licensors
            except as expressly by the Terms.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Materials Provided to SPPH, LLC or Posted on Any SPPH, LLC Web Page.
            SPPH, LLC does not claim ownership of the material you provide to
            GeneHub (including feedback and suggestions). No compensation will
            be paid with respect to the use of your Submission, as provided
            herein. SPPH, LLC is under no obligation to post or use any
            Submission you may provide and may remove any Submission at any time
            in SPPH, LLC’s sole discretion.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            International Users. The Service is controlled, operated, and
            administered by SPPH, LLC from our offices within the USA. If you
            access the Service from a location outside the USA, you are
            responsible for compliance with all local laws. You agree that you
            will not use GeneHub Content accessed through SPPH, LLC in any
            country or in any manner prohibited by any applicable laws,
            restrictions, or regulations.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Indemnification. You agree to indemnify, defend and hold harmless
            SPPH, LLC, its directors, employees, agents and third parties, for
            any losses, costs, liabilities and expenses (including reasonable
            attorney’s fees) relating to or arising out of your use of or
            inability to use the Site or services, your violation of any terms
            of this Agreement or your violation of any rights of a third party,
            or your violation of any applicable laws, rules or regulations.
            SPPH, LLC reserves the right, at its own cost, to assume the
            exclusive defense and control of any matter otherwise subject to
            indemnification by you, in which event you will fully cooperate with
            SPPH, LLC in asserting any available defenses.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Arbitration. In the event the parties are not able to resolve any
            dispute between them arising out of or concerning these Terms and
            Conditions, or any provisions hereof, whether in contact, tort, or
            otherwise at law or in equity for damages or any other relief, then
            such despite shall be resolved only by final and binding arbitration
            pursuant to the Federal Arbitration Act, conducted by a single
            neutral arbitrator and administered by the American Arbitration
            Association, or a similar arbitration service selected by the
            parties in Amarillo, Texas.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            The arbitrator’s award shall be final, and judgment may be entered
            upon it in any count having jurisdiction. If any legal or equitable
            action, proceeding or arbitration arises out of or concerns these
            Terms and Conditions, the prevailing party shall be entitled to
            recover its costs and reasonable attorney’s fees. The parties agree
            to arbitrate and claims regarding these Terms and Conditions or any
            disputes arising as a result of these Terms and Conditions, whether
            directly or indirectly, including Tort claims that are a result of
            these Terms and Conditions. The parties agree that the Federal
            Arbitrary Act governs the interpretation and enforcement of this
            provision shall survive the termination of these Terms and
            Conditions.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Class Action Waiver: Any arbitration under these Terms and
            Conditions will take place on an individual basis; class
            arbitrations and class/representative/collective actions are not
            permitted. The parties agree that party may bring claims the other
            only in each’s individual capacity, and not as a plaintiff or class
            member in any putative class, collective and/or representative
            proceeding, such as in the form of a private attorney general action
            against the other. Further, unless both you and SPPH, LLC agree
            otherwise, the arbitrator may not consolidate more than person’s
            claim, and may not otherwise preside over any form of a
            representative of class proceeding.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Liability Disclaimer: The information, software, products, and
            services included in or available through the site may include
            inaccuracies or typographical errors. Changes are periodically added
            to the information herein. SPPH. LLC and/or its suppliers may make
            improvements and/or changes in the site any times.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            SPPH, LLC and/or its suppliers make no representations about the
            suitability, reliability, availability, timeliness, and accuracy of
            the information, software, products, services, and related graphics
            contained on the site for any purpose. To the maximum extent
            permitted by applicable law, all such information, software,
            products, services, and related graphics are provided “as is’
            without warranty or condition of any kind. SPPH. LLC and/or its
            suppliers hereby disclaim all warranties and conditions with regard
            to this information, software, products, services and related
            graphics, including all implied warranties or conditions of
            merchantability, fitness for a particular purpose, title and
            noninfringement.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            To the maximum extent permitted by applicable law, in no event shall
            SPPH, LLC and/or its suppliers be liable for any direct, indirect,
            punitive, incidental, special, consequential damages to any damages
            whatsoever including, without limitation, damages for loss of use,
            data or profits, arising out of or in ant way connected with the use
            or performance of the site, with the delay or inability to use the
            site or related services, the provision of or failure to provide
            services, or for any information, software, products, services and
            related graphics obtained through the site, or otherwise even id
            SPPH, LLC or any of its suppliers has been advised of the
            possibility for consequential or incidental damages, the about
            limitation may not apply to you. If you are dissatisfied with any
            portion of the site, or with any of these terms of use, your sole
            and exclusive remedy is to discontinue using the site.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Termination/Access Restriction: SPPH, LLC reserves the right, in its
            sole discretion, to terminate your access to the Site and the
            related services or any portion thereof at any time, without notice.
            To the maximum extent permitted by law, this agreement is governed
            by the laws of the State of Texas and you hereby consent to the
            exclusive juris diction and venue of courts in Texas in all disputes
            arising out of or relating to the use of the Site. Use of the Site
            is unauthorized in any jurisdiction that does not give effect to all
            provisions of these Terms, including, without limitations, this
            section.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            You agree that no joint venture, partnership, employment, or agency
            relationship exists between you and SPPH, LLC as a result of this
            agreement or use of the Site. SPPH, LLS’s performance of this
            agreement is subject of existing laws and legal process, and nothing
            contained in this agreement is in derogation of SPPH, LLC’s right to
            comply with governmental, court and law enforcement requests or
            requirements relating to your use of the Site or information
            provided to or gathered by SPPH, LLC with respect to such use. If
            any part of this agreement is determined to be invalid or
            unenforceable pursuant to applicable law including, but not limited
            to, the warranty disclaimers and liability limitations set forth
            above, then the invalid or unenforceable provision will be deemed
            superseded by a valid, enforceable provision that most closely
            matches the intent of the original provision and the remainder of
            the agreement shall continue in effect.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Unless otherwise specified herein, this agreement constitutes the
            entire agreement between the user and SPPH, LLC with respect to the
            Site and it supersedes all prior or contemporaneous communications
            and proposals, whether electronic, oral, or written, between the
            user and SPPH, LLC with respect to the Site. A printed version of
            this agreement and of any notice given in electronic form shall be
            admissible in judicial or administrative proceedings based upon or
            relating to this agreement to the same extent and subject to the
            same extent and subject to the same conditions as other business
            documents and records originally generated and maintained in printed
            form. It is the express with to the parties that this agreement and
            all related documents be written in English.
          </Text>
          <Text style={tw("text-[16px] py-4 text-justify")}>
            Changes to Terms. SPPH, LLC reserves the right, in its sole
            discretion, to change the Terms under which SPPH, LLC is offered.
            The most current version of the Terms will supersede all previous
            versions. SPPH, LLC encourages you to periodically review the Terms
            to stay informed of our updates.
          </Text>
        </Page>
      </Document>
    </>
  );
};

export default TermsPDF;
