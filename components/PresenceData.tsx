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

const LanyardDataClient: React.FC<LanyardDataProps> = ({ userId }) => {
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

  return (
    <div>
      {!data ? (
        <p style={{ fontSize: "12px", color: "rgba(99, 99, 99, 0.855)" }}>Carregando Informações...</p>
      ) : (
        <div>
          {data.spotify && (
            <a className="AQsyz" style={{ display: "block" }}>
              <h5>Ouvindo Spotify</h5>
              <div className="oaXDH">
                <div className="ifqszt">
                  <img
                    src={data.spotify.album_art_url}
                    className="sc-qRumB flUrJQ"
                    width="90"
                    height="90"
                    draggable="false"
                  />
                </div>
                <div className="jrZBPH">
                  <h5>{data.spotify.song}</h5>
                  <p>{data.spotify.artist}</p>
                </div>
              </div>
            </a>
          )}

          {data.activities && data.activities.length > 0 ? (
            <a href="/presence" style={{ textDecoration: 'none' }}>
              <div>
              {data.activities
                .filter(activity => activity.type === 0)
                .map((activity, index) => (
                  <a className="AQsyz" style={{ display: "block" }} key={index}>
                    <h5>Fazendo Algo</h5>
                    <div className="oaXDH">
                      <div className="ifqszt">
                        <img
                          src={activity.assets && activity.assets.large_image
                            ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets?.large_image}.png`
                            : 'https://i.imgur.com/p7oEqET.png'}
                          className="sc-qRumB flUrJQ"
                          width="90"
                          height="90"
                          draggable="false"
                        />
                      </div>
                      <div className="jrZBPH">
                        <h5>{activity.name}</h5>
                        <p>{activity.details}</p>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
            </a>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default LanyardDataClient;
