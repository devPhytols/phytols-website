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
                    {data.activities && data.activities.length > 0 ? (
                        <div>
                            <a className="presence-block" style={{ display: "block" }}>
                                <h3>Meu Discord é {data.discord_user.username}#<span style={{ color: 'rgba(232, 54, 119, 0.893)' }}>{data.discord_user.discriminator}</span></h3>
                                <div style={{ border: 'solid 2px #181818', borderRadius: '15px', padding: '1.2em 1em 1em' }}>
                                    <div className="presence-d1">
                                        <div className="presence-c" style={{ position: "relative" }}>
                                            <img
                                                src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=1024`}
                                                className="sc-qRumB flUrJQ"
                                                width="150"
                                                height="150"
                                                draggable="false"
                                            />
                                            <div id='circulo' style={{
                                                position: "absolute",
                                                bottom: "0",
                                                right: "calc(5px - 10px)",
                                                backgroundColor:
                                                    data.discord_status === "online"
                                                        ? "#2ad146"
                                                        : data.discord_status === "dnd"
                                                            ? "#f73131"
                                                            : data.discord_status === "idle"
                                                                ? "#f7af31"
                                                                : "",
                                            }}></div>
                                        </div>
                                        <div className="presence-dt">
                                            <h5>N/A</h5>
                                            <p>Não foi possível obter dados da API.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ) : (
                        <div className='presence-details'>
                            Aqui você poderá ver minha atividade no Discord, se você está lendo isso significa que eu não estou online, quando eu estiver você poderá ver qualquer atividade que eu exibir no meu perfil do <a href="#">Discord</a>.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default LanyardDataClient;
