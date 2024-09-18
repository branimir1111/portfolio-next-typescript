import { cn } from '@/lib/utils';
import { Boxes } from '../ui/background-boxes';
import { Button } from './button';
import { frontTools, backTools } from '@/utils/data/aboutSectionData';

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 break5:grid-cols-2  md:grid-cols-4 gap-4 max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none ${
          id === 1 ? '' : 'p-4'
        } dark:bg-black-100 ${
          id === 1 ? '' : 'dark:border-white/[0.2]'
        } bg-white border border-transparent`,
        className
      )}
    >
      {id === 1 ? (
        <div className="relative w-full h-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg p-8">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <h1
            className={cn(
              'font-sans text-center font-bold md:text-4xl text-xl text-white relative z-20'
            )}
          >
            {title}
          </h1>
          <p className="text-center mt-2 relative z-20 font-sans font-normal text-xs dark:text-neutral-300">
            {description}
          </p>
        </div>
      ) : id === 2 ? (
        <div className="grid grid-cols-2 h-full md:grid-cols-1 break10-5:grid-cols-2">
          <div>
            <div>
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                {title}
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                {description}
              </div>
            </div>
          </div>
          <div className="w-full grid gap-4 place-items-center">
            {frontTools.map((frontTool) => {
              const { id, text } = frontTool;
              return (
                <Button
                  key={id}
                  type="button"
                  className={`w-full bg-[#10132E] hover:bg-[#10132E] py-6 ${
                    text === 'JavaScript'
                      ? 'text-[#E8D44D]'
                      : text === 'TypeScript'
                      ? 'text-[#0376C6]'
                      : text === 'React'
                      ? 'text-[#58C4DC]'
                      : null
                  }`}
                >
                  {text}
                </Button>
              );
            })}
          </div>
        </div>
      ) : id === 3 ? (
        <div className="grid grid-cols-2 h-full md:grid-cols-1 break10-5:grid-cols-2">
          <div>
            <div>
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                {title}
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                {description}
              </div>
            </div>
          </div>
          <div className="w-full grid gap-4 place-items-center">
            {backTools.map((backTool) => {
              const { id, text } = backTool;
              return (
                <Button
                  key={id}
                  type="button"
                  className={`w-full bg-[#10132E] hover:bg-[#10132E] py-6 font-semibold ${
                    text === 'NodeJS'
                      ? 'text-[#417E38]'
                      : text === 'ExpressJS'
                      ? 'text-white'
                      : text === 'MongoDB'
                      ? 'text-[#00ED64]'
                      : null
                  }`}
                >
                  {text}
                </Button>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { BentoGrid, BentoGridItem };
