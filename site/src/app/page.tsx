/* eslint-disable react/no-unescaped-entities */
import BentoRow from "@/boba-components-src/BentoRow";
import Card from "@/boba-components-src/Card";
import Center from "@/boba-components-src/Center";
import Chip from "@/boba-components-src/Chip";
import ClickSwitch from "@/boba-components-src/ClickSwitch";
import GlitchyTextOnScroll from "@/boba-components-src/GlitchyTextOnScroll";
import MajorSegment from "@/boba-components-src/MajorSegment";
import Row from "@/boba-components-src/Row";

import "@/boba-components-src/StretchInside.css";
import Underline from "@/boba-components-src/Underline";

export default function Home() {
  return (
    <div className="boba-stretch-inside">
      <MajorSegment image={undefined} imageFirst={false}>
        <GlitchyTextOnScroll />
        <div className="relative h-full flex items-center">
          <Row>
            <div className="mr-8">
              <h3>Introducing</h3>
              <h1>boba-ui</h1>
              <span>By </span>
              <Underline>
                <ClickSwitch a={"Joel"} b={"奕諴"} />
              </Underline>
            </div>
            <Card>
              <div className="h-full flex flex-col justify-center">
                <h3>It glows.</h3>
                <p className="italic text-sm">
                  That's actually like half of the point of this so I really
                  hope it does.
                </p>
              </div>
            </Card>
          </Row>
        </div>
      </MajorSegment>
      <div className="m-8">
        <Center>
          <div className="md:max-w-2xl">
            <span>
              The version of{"  "}
              <Chip text="boba-ui" />
              {"  "}in front of you is mainly meant for my own sites. Everyone
              is free to borrow components/fork the project and write their own
              flavour of boba, just for them!
            </span>
          </div>
        </Center>
      </div>

      <BentoRow>
        <MajorSegment image={undefined} imageFirst={false}>
          <p>
            boba-ui aims to be a unified set of components for the applications
            that I create - both on the web, and on any potential projects using
            the mobile platforms.
            <br />
            <br />
            In fancy words, the design guided by the principles of light,
            reflectivity and responsiveness. If you're a real designer you
            probably have realised that I have no idea what I'm doing.
            <br />
            <br />
            It aims to combine the information density and complexity of design
            commonly found in Asia (hence the name: 珍珠奶茶 🧋), with the
            simplicity of websites in anglophone countries.
          </p>
        </MajorSegment>
        <MajorSegment image={undefined} imageFirst={true}>
          <GlitchyTextOnScroll />
          <div className="p-16">
            <h1>About</h1>
          </div>
        </MajorSegment>
      </BentoRow>

      <BentoRow>
        <MajorSegment image={undefined} imageFirst={true}>
          <div className="p-16">
            <h1>Usage</h1>
          </div>
        </MajorSegment>
        <MajorSegment image={undefined} imageFirst={false}>
          <div>
            <p>It's flexible.</p>
            <br />
            <div className="flex flex-col gap-2">
              <Card>
                <p>Copy the folder into your project.</p>
              </Card>
              <Card>
                <p>Fork the repository and manage it yourself</p>
              </Card>
              <Card>
                <p>Clone the repository into a subfolder</p>
              </Card>
              <br />
              <p>
                ... and likely many more ideas we haven't come up with yet. Use
                this however you want!
              </p>
            </div>
          </div>
        </MajorSegment>
      </BentoRow>
    </div>
  );
}
