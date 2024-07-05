import FirstUI from "@/components/home/FirstUI";
import SecondUI from "@/components/home/SecondUI";
import ThirdUI from "@/components/home/ThirdUI";
import { fetchMoviesList } from "@/api";
import { MovieType } from "@/types/data";
import { GetServerSideProps } from "next";

interface HomeProps {
  data: MovieType[];
}

export default function Home({data}: HomeProps) {
  return (
    <main>
      <FirstUI data={data}/>
      <SecondUI data={data}/>
      <ThirdUI data={data}/>
    </main>
  );
}

export const getServerSideProps = (async () => {
    const response = await fetchMoviesList();
  
    return {
      props: {
        data: response.data,
      },
    };
}) satisfies GetServerSideProps<{ data: MovieType[] }>
