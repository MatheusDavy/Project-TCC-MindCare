/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import * as S from './style';
import ReactCrop, {
    centerCrop,
    convertToPixelCrop,
    makeAspectCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import setCanvasPreview from './script';
import { ButtonCustom } from 'src/components/Materials/Buttons/ButtonCustom';

export type Props = {
    closeModal: () => void;
    updateProfile: (avatar: string) => void;
};

export function SelectProfilePhoto({ closeModal, updateProfile }: Props) {
    const imgRef = useRef(null);
    const previewCanvasRef = useRef<any>(null);
    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState<any>();
    const [error, setError] = useState('');

    const ASPECT_RATIO = 1;
    const MIN_DIMENSION = 150;

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const imageElement = new Image();
            const imageUrl = reader.result?.toString() || '';
            imageElement.src = imageUrl;

            imageElement.addEventListener('load', e => {
                if (error) setError('');
                const {
                    naturalWidth,
                    naturalHeight,
                } = e.currentTarget as HTMLImageElement;
                if (
                    naturalWidth < MIN_DIMENSION ||
                    naturalHeight < MIN_DIMENSION
                ) {
                    setError('Image must be at least 150 x 150 pixels.');
                    return setImgSrc('');
                }
            });
            setImgSrc(imageUrl);
        });
        reader.readAsDataURL(file);
    };

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const { width, height } = e.currentTarget;
        const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

        const crop = makeAspectCrop(
            {
                unit: '%',
                width: cropWidthInPercent,
            },
            ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height);
        setCrop(centeredCrop);
    };

    const handleUpdate = () => {
        if (imgRef.current) {
            const image: HTMLImageElement = imgRef.current;
            if (image) {
                setCanvasPreview(
                    image, // HTMLImageElement
                    previewCanvasRef.current, // HTMLCanvasElement
                    convertToPixelCrop(crop!, image.width, image.height)
                );
                const dataUrl = previewCanvasRef.current?.toDataURL();
                if (dataUrl) {
                    updateProfile(dataUrl);
                }
                closeModal();
            }
        }
    };

    return (
        <>
            <S.SelectProfileOverlayer onClick={closeModal} />
            <S.SelectProfileWrapper>
                {!imgSrc && (
                    <div
                        className="flex items-center justify-center w-full"
                        style={{ width: '700px' }}
                    >
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#585ce5] hover:opacity-80"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-white">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>{' '}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-white">
                                    SVG, PNG, JPG or GIF (MIN. 150x160px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={onSelectFile}
                            />
                        </label>
                    </div>
                )}

                {imgSrc && (
                    <div className="bg-white rounded mt-4 shadow-lg p-10 gap-10 flex flex-col align-center justify-center">
                        <ReactCrop
                            crop={crop}
                            onChange={(_, percentCrop) =>
                                setCrop(percentCrop)
                            }
                            circularCrop
                            keepSelection
                            aspect={ASPECT_RATIO}
                            minWidth={MIN_DIMENSION}
                        >
                            <img
                                ref={imgRef}
                                src={imgSrc}
                                alt="Upload"
                                style={{
                                    maxHeight: '70vh',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                }}
                                onLoad={onImageLoad}
                            />
                        </ReactCrop>
                        <div className="flex gap-3 mt-5 mx-auto">
                            <ButtonCustom
                                theme='RED'
                                type='button'
                                onClick={() => {
                                    setImgSrc('');
                                }}
                            >
                                Cancelar
                            </ButtonCustom>
                            <ButtonCustom
                                theme='BLUE'
                                type='button'
                                onClick={handleUpdate}
                            >
                                Salvar
                            </ButtonCustom>
                        </div>
                    </div>
                )}

                {crop && (
                    <canvas
                        ref={previewCanvasRef}
                        className="mt-4"
                        style={{
                            display: 'none',
                            border: '1px solid black',
                            objectFit: 'contain',
                            width: 150,
                            height: 150,
                        }}
                    />
                )}
            </S.SelectProfileWrapper>
        </>
    );
}
