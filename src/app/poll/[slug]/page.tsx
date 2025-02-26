"use client";

import Loader from "@/components/atoms/Loader";
import FullPoll from "@/components/organisms/Polls/FullPoll";
import DefaultTemplate from "@/components/templates/DefaultTemplate";
import { polls } from "@/mocks/polls";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PostPage = () => {
  const [poll, setPoll] = useState<PollEntity | undefined>(undefined);

  const params = useParams();

  useEffect(() => {
    const foundPoll = polls.find((p) => p.slug === params.slug);
    setPoll(foundPoll);
  }, [params]);

  return (
    <DefaultTemplate>
      {!poll ? <Loader /> : <FullPoll poll={poll} />}
    </DefaultTemplate>
  );
};

export default PostPage;
