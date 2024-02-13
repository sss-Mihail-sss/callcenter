'use client';

import { toast } from 'sonner';
import { useEffect } from 'react';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    toast(error.name, {
      description: error.message
    });

    console.log(11);
  }, []);

  return (
    <div>{error.message}</div>
  );
}
