import {useMemo} from 'react';
import type {To} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

// ----------------------------------------------------------------------

export function useRouter(): useMemo<{
  reload: () => void,
  forward: () => void,
  replace: (href: To) => void,
  back: () => void,
  push: (href: To) => void,
}> {
  const navigate = useNavigate();

  return useMemo(
    () => ({
      back: () => {
        navigate(-1);
      },
      forward: () => {
        navigate(1);
      },
      reload: () => {
        window.location.reload();
      },
      push: (href: To) => {
        navigate(href);
      },
      replace: (href: To) => {
        navigate(href, {replace: true});
      },
    }),
    [navigate]
  );
}
