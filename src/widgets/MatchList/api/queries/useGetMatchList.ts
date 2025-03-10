import axios from 'axios';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { UseGetMatchListResponse, MatchFromServer } from '../../model';

export const useGetMatchList = () => {
  return useQuery<UseGetMatchListResponse>({
    queryKey: 'matchList',
    queryFn: async () => {
      return axios
        .get<UseGetMatchListResponse>('https://app.ftoyd.com/fronttemp-service/fronttemp')
        .then((response) => response.data);
    },
  });
};

export const useGetMatchesUpdateSocket = () => {
  const url = 'wss://app.ftoyd.com/fronttemp-service/ws';

  const queryClient = useQueryClient();
  const ws = new WebSocket(url);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const message = JSON.parse(event.data);
        if (message.type === 'update_matches') {
          queryClient.setQueryData<UseGetMatchListResponse | undefined>('matchList', (oldData) => {
            if (!oldData) return oldData;

            const updatedMatches = oldData.data.matches.map((oldMatch) => {
              const newMatch = message.data.find(
                (m: MatchFromServer) => m.title === oldMatch.title
              );
              return newMatch ? { ...oldMatch, ...newMatch } : oldMatch;
            });

            return { ...oldData, data: { ...oldData.data, matches: updatedMatches } };
          });
        }
      } catch (error) {
        console.error('WebSocket error:', error);
      }
    };

    ws.addEventListener('message', handleMessage);
    return () => {
      ws.removeEventListener('message', handleMessage);
      ws.close();
    };
  }, [queryClient]);
};
