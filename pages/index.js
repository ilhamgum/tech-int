import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const option = [
  {
    label: "Banking Machinery",
    color: "text-blue-500",
    bgColor: "bg-blue-200",
    sublabel: "Help you to grow your financial bussiness drastically",
  },
  {
    label: "Workstation",
    color: "text-green-500",
    bgColor: "bg-green-200",
    sublabel: "Enchance the productivity of your people",
  },
  {
    label: "Server & Hosting",
    color: "text-purple-500",
    bgColor: "bg-purple-200",
    sublabel: "Fulfill yout database and software needs",
  },
  {
    label: "UPS",
    color: "text-red-500",
    bgColor: "bg-red-200",
    sublabel: "Prevent any damage of your devices from power loss",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-100 flex min-h-screen flex-col items-center space-y-10 p-24">
      <div className="text-center text-3xl">
        <p>
          {`Let's see what`}{" "}
          <span className="underline underline-offset-8 decoration-green-400">
            IT hardwares
          </span>{" "}
          we can offer
        </p>
      </div>

      <div className="flex flex-col space-y-4 justify-center">
        {option.map((item) => (
          <div className={` w-full flex items-center`}>
            <div
              className={`mr-2 ${item.bgColor} px-6 py-4 w-[300px] h-[200px] text-center flex flex-col justify-center items-center ${item.color}`}
            >
              <p className="font-bold tracking-wide text-lg">{item.label}</p>
              <p className="text-[8pt] text-black my-4">{item.sublabel}</p>

              <button className="font-semibold flex items-center hover:underline">
                <p>Get Yours </p>

                <IoIosArrowForward
                  style={{ marginBottom: "-2px" }}
                  className="text-2xl"
                />
              </button>
            </div>

            {[...Array(5)].map((_, i) => (
              <figure className="relative w-[200px] h-[200px] mx-2 border">
                <Image
                  fill
                  alt="ATM"
                  priority
                  src={"/atm.png"}
                  // width={150}
                  // height={150}
                />
              </figure>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center space-y-4">
        <p>
          <span className="font-semibold">
            {`Didn't`} find what you were looking for?
          </span>{" "}
          Reach us to get your order customized based on your IT needs
        </p>

        <button className="px-4 py-2 border border-green-800 text-green-800 font-semibold hover:bg-green-200 duration-300">
          Contact our sales team
        </button>
      </div>
    </main>
  );
}
