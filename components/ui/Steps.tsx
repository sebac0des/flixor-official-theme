export function Steps({ steps }: Props) {
  return (
    <ul className="flex flex-col gap-5">
      {steps.map((item, index) => {
        return (
          <li key={item.id} className="text-primary flex gap-3 h-fit">
            <div>
              <span className="font-extrabold text-lg xl:text-2xl">
                0{index + 1}
              </span>
              <span className="text-2xl font-bold text-[#fe734f]">.</span>
            </div>
            <div>
              <h4 className="text-lg xl:text-2xl font-bold">{item.title}</h4>
              <p className="text-primary text-sm xl:text-base">{item.desc}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

interface Props {
  steps: StepItem[];
}

interface StepItem {
  id: number;
  title: string;
  desc: string;
}
