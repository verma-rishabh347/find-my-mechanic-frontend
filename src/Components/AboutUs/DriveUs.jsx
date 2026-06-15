import { ShieldCheck, Eye, Wrench } from "lucide-react";

function DriveUs() {
  const options = [
    {
      img: <ShieldCheck />,
      head: "Unwavering Trust",
      body: "We meticulously vet every mechanic on our platform to ensure your vehicle is always in safe, professional hands.",
    },
    {
      img: <Eye />,
      head: "Transparency",
      body: "No hidden fees or surprise costs. We believe in clear pricing and honest communication.",
    },
    {
      img: <Wrench />,
      head: "Quality Service",
      body: "Only the best tools and parts meet our rigorous service standards.",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl text-blue-800 text-center mt-10">
        The Values That Drive Us
      </h1>
      <div className="grid grid-cols-3 mt-10 mb-10 gap-20 ml-20 mr-20">
        {options.map((option, index) => (
          <div
            key={index}
            className="text-center bg-slate-100 border rounded-2xl  p-5"
          >
            <div className="flex justify-center"> {option.img}</div>
            <h2 className="text-2xl mt-5  text-blue-900">{option.head}</h2>
            <p className="mt-2">{option.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DriveUs;
