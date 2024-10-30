

export default function Title({ data }: { data: string[] }) { 
  return (
    <div className='flex flex-col gap-[20px] p-[30px] text-center sm:block sm:p-0'>
      <h1 className='text-[48px] font-[700] text-mainColor-900'>{data[0].toUpperCase()}</h1>
      <p className='text-[20px] text-darkColor-200'>{data[1]}</p>
     
    </div>
  );
}
