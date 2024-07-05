import { fetchMovieDetail } from "@/api";
import { MovieType } from "@/types/data";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import React from "react";

interface MovieDetailPageProps {
  data: MovieType
}

function MovieDetailPage({data}: MovieDetailPageProps) {
  return (
    <div className="flex flex-col justify-center align-middle h-4/5 m-5 gap-10">
      <div className="flex flex-col self-center w-4/5">
        <div className="flex flex-row gap-5">
          <Image src={data.image} width={250} height={360} alt="Poster" className="bg-gray-08 rounded-md shadow-md" />
          <div className="flex flex-col gap-3">
            <p className=" inline-block text-2xl text-default-text font-bold p-1">{data.title}</p>
            <p className="inline-block text-sm text-default-text p-1">{data.creator}</p>
            <p className=" inline-block text-sm text-default-text p-1">{data.summary}</p>
          </div>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl mt-8">
          <p className="text-sm text-default-text font-light whitespace-pre-line">{data.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;

type data = {
   data: MovieType;
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<{props: data}> {
  const id = context.params?.id;

  const response = await fetchMovieDetail({ id });

  return {
    props: {
      data: response.data,
    },
  };
}