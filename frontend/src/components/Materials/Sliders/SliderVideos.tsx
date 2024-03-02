// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IconPlayerPlay, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';


export function SliderVideos({ data, pathDescription }) {
    const [swiper, setSwiper] = useState<any>(null);

    return (
        <SliderWrapper>
            <Swiper
                loop
                spaceBetween={30}
                slidesPerView={'auto'}
                onSwiper={swiper => {
                    setSwiper(swiper);
                }}
            >
                {data.map(movie => (
                    <SwiperSlide
                        key={movie.id}
                        className="swiper-slide"
                    >
                        <Card
                            id={movie.id}
                            title={movie.title}
                            description={movie.description}
                            category={movie.category}
                            banner={movie.banner}
                            path={pathDescription}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {swiper && (
                <>
                    <SliderPrev onClick={() => swiper.slidePrev()}>
                        <IconChevronLeft size={'2.5em'} />
                    </SliderPrev>
                    <SliderNext onClick={() => swiper.slideNext()}>
                        <IconChevronRight size={'2.5em'} />
                    </SliderNext>
                </>
            )}
        </SliderWrapper>
    );
};

const Card = ({ id, title, description, category, banner, path }) => {
    const router = useRouter();

    return (
        <CardWrapper>
            <CardVideo>
                <CardDescription>
                    <p className="ellipsis overflow-hidden line-clamp-3">
                        {description}
                    </p>
                </CardDescription>
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full object-cover object-center"
                />
                <CardPlay
                    onClick={() => {
                        router.push(`${path}/${id}`);
                    }}
                >
                    <IconPlayerPlay width={25} height={25} />
                </CardPlay>
            </CardVideo>
            <div className="pl-5">
                <p className="text-md font-semibold">{title}</p>
                <span className="text-sm font-thin">{category}</span>
            </div>
        </CardWrapper>
    );
};

// Slider
export const SliderWrapper = styled.div`
    position: relative;
    max-width: 100%;

    .swiper-slide {
        width: fit-content;
    }
`;

const buttonBase = tw.button`
    absolute

    w-[60px]
    h-[60px]

    flex items-center justify-center
    rounded-[50%]
    bg-[#0063f2]
    text-[white]
    transition-all duration-500
    z-100

    opacity-40 hover:opacity-100
`;
export const SliderNext = tw(buttonBase)`
    right-[-5px] top-[30%]
    translate-x-[100%]
`;
export const SliderPrev = tw(buttonBase)`
    left-[-5px] top-[30%]
    translate-x-[-100%]
`;

export const CardWrapper = tw.div`
    flex flex-col gap-4
    w-[400px]
`;
export const CardVideo = tw.div`
    relative
    w-100
    aspect-[1.4]
    rounded-[40px]
    overflow-hidden
    bg-blue-500
    group
`;
export const CardDescription = tw.div`
    w-full h-full
    absolute z-0 inset-0
    bg-black/30 backdrop-blur-sm

    text-sm text-white font-thin
    flex items-center
    p-7

    group-hover:opacity-100 opacity-0
    transition-all duration-500
`;
export const CardPlay = tw.button`
    p-3
    rounded-[50%]
    bg-white hover:bg-[#0063f2]
    text-[#0063f2] hover:text-white
    transition-all duration-500
    absolute
    bottom-4
    right-4
    z-10
`;
