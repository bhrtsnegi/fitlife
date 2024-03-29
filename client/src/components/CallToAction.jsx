import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex md:flex-row flex-col p-4 border border-teal-400 rounded-md text-center lg:pl-[20%]">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to Hire me?</h2>
        <p className="text-gray-500 my-2">Send me an email here.</p>
        <Button
          gradientDuoTone="greenToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://bhrtsnegi.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1 flex md:justify-normal justify-center">
        <img src="https://bhrtsnegi.github.io/assets/imgs/avatar.jpg" />
      </div>
    </div>
  );
}
