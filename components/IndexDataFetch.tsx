'use client';
import { useEffect, useState } from 'react';
// import Link from 'next/link';

interface LanyardDataProps {
  userId: string;
}

interface Resp {
  discord_status: "online" | "dnd" | "idle";
  username: string;
  discriminator: string;
  discord_user: {
    username: string;
    discriminator: string;
    avatar: string;
    id: string;
  };
  spotify: {
    track_id: string;
    song: string;
    artist: string;
    album_art_url: string;
  };
  activities: [{
    type: number;
    name: string;
    details: string;
    assets: {
      large_image: string
    };
    application_id: string;
  }];
}

const IndexDataFetch: React.FC<LanyardDataProps> = ({ userId }) => {
  const [data, setData] = useState<Resp | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.lanyard.rest/v1/users/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      });
  }, [userId]);

  let lang: any;

  return (
    
    <div>
      {!data ? (
        <p style={{ fontSize: "12px", color: "rgba(99, 99, 99, 0.855)" }}>Carregando Informações...</p>
      ) : (
        <div>
          {data.spotify && (
            <a className="AQsyzp" style={{ display: "block" }}>
              <h5>Ouvindo Spotify</h5>
              <div className="oaXDHp">
                <div className="ifqsztp">
                  <img
                    src={data.spotify.album_art_url}
                    className="sc-qRumBp flUrJQp"
                    width="70"
                    height="70"
                    draggable="false"
                  />
                </div>
                <div className="jrZBPHp">
                  <h5>{data.spotify.song}</h5>
                  <p>{data.spotify.artist}</p>
                </div>
              </div>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default IndexDataFetch;
