import Image from 'next/image';
 
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <div className="relative">
          <div
            className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent border-b-black"
          />
        </div>
        <h1 className="ml-4 text-3xl font-bold text-gray-800">
          Welcome to the New Project
        </h1>
       
        
      />
      </div>
    </main>
  );
}
