import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useLoading } from "@/hooks/useLoading";
import HomeLayout from "@/layouts/HomeLayout";
import "@/styles/globals.css";
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const isLoading = useLoading();
  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  );
}
