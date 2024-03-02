'use client';

import * as S from './Sumarry.style';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function Summary() {
    if (typeof window === 'undefined') return <></>;

    return (
        <S.Wrapper>
            <S.Title>
                <b>Visão geral</b> <br />
                Progresso
            </S.Title>
            <SummaryCardLearning />
        </S.Wrapper>
    );
}

const SummaryCardLearning = () => {
    const percent = 50;
    const options = {
        chart: {
            type: 'radialBar',
        },

        series: [percent],
        colors: ['#0063f2'],

        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '55%',
                },

                dataLabels: {
                    show: true,
                    value: {
                        offsetY: '-8%',
                        color: '#111',
                        fontWeight: 'bold',
                        fontSize: '27px',
                        show: true,
                    },
                },
            },
        },

        stroke: {
            lineCap: 'round',
        },
        labels: [''],
    };

    return (
        <Chart
            options={options}
            type="radialBar"
            width={230}
            series={options.series}
        />
    );
};
