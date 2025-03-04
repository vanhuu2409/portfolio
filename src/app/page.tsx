import {
  HButton,
  IconHamburger,
  Typography,
  WrapperGlobal,
} from "@/shared/_components";

export default function Home() {
  return (
    <WrapperGlobal>
      <div className='flex flex-col justify-between relative h-full'>
        <div className='flex items-center border-b border-slate-700'>
          <Typography variant='p' className='text-slate-400 flex-1 px-6 py-4'>
            Hello, world!
          </Typography>
          <HButton
            variant='ghost'
            className='text-slate-500 after:border-0 p-4 w-fit'
          >
            <IconHamburger />
          </HButton>
        </div>

        <div className='px-6 py-4 flex flex-col gap-16'>
          <div className='flex flex-col gap-2'>
            <Typography variant='p' pSize='lg' className='text-slate-400'>
              Hi all. I am
            </Typography>
            <Typography variant='h2' className='text-slate-50 font-medium'>
              Hi all. I am
            </Typography>
            <Typography variant='h6' className='text-indigo-500 font-normal'>
              {`> Front-end developer`}
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography variant='p' pSize='sm' className='text-slate-50'>
              // find my profile on Github:
            </Typography>
            <Typography variant='p' pSize='sm' className='text-slate-50'>
              <span className='text-indigo-500'>const</span>{" "}
              <span className='text-teal-400'>githubLink</span> =
              <span className='text-rose-300'>
                “https://github.com/example/url”
              </span>
            </Typography>
          </div>
        </div>

        <div className='flex items-center border-t border-slate-700'>
          <Typography variant='p' className='text-slate-400 flex-1 px-6 py-4'>
            find me in:
          </Typography>

          <div className=''>
            <HButton
              variant='ghost'
              className='text-slate-500 before:content-[""] before:absolute before:inset-0 before:border-l before:border-slate-700 before:pointer-events-none after:border-0 p-4 w-fit'
            >
              <IconHamburger />
            </HButton>
            <HButton
              variant='ghost'
              className='text-slate-500 before:content-[""] before:absolute before:inset-0 before:border-l before:border-slate-700 before:pointer-events-none after:border-0 p-4 w-fit'
            >
              <IconHamburger />
            </HButton>
            <HButton
              variant='ghost'
              className='text-slate-500 before:content-[""] before:absolute before:inset-0 before:border-l before:border-slate-700 before:pointer-events-none after:border-0 p-4 w-fit'
            >
              <IconHamburger />
            </HButton>
          </div>
        </div>
      </div>
    </WrapperGlobal>
  );
}
