import { useLogic } from './OAuth.logic';
import * as S from './OAuth.style';

export function OAuthLogin() {
    const { methods } = useLogic({});

    return (
        <S.LoginWrapper>
            <S.LoginWrapperButton
                onClick={(e) => {
                    e.preventDefault();
                    methods.googleLogin();
                }}
                className="simple_hover"
            >
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23.001 12.7331C23.001 11.8698 22.9295 11.2398 22.7748 10.5864H12.7153V14.483H18.62C18.501 15.4514 17.8582 16.9097 16.4296 17.8897L16.4096 18.0202L19.5902 20.4349L19.8106 20.4564C21.8343 18.6247 23.001 15.9297 23.001 12.7331"
                        fill="#4285F4"
                    />
                    <path
                        d="M12.714 23.0001C15.6068 23.0001 18.0353 22.0667 19.8092 20.4567L16.4282 17.89C15.5235 18.5083 14.3092 18.94 12.714 18.94C9.88069 18.94 7.47596 17.1083 6.61874 14.5767L6.49309 14.5871L3.18583 17.0955L3.14258 17.2133C4.90446 20.6433 8.5235 23.0001 12.714 23.0001Z"
                        fill="#34A853"
                    />
                    <path
                        d="M6.62046 14.5765C6.39428 13.9232 6.26337 13.2231 6.26337 12.4998C6.26337 11.7764 6.39428 11.0765 6.60856 10.4231L6.60257 10.284L3.25386 7.73535L3.14429 7.78642C2.41814 9.20978 2.00146 10.8081 2.00146 12.4998C2.00146 14.1915 2.41814 15.7897 3.14429 17.2131L6.62046 14.5765"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12.7141 6.05997C14.7259 6.05997 16.083 6.91163 16.8569 7.62335L19.8807 4.73C18.0236 3.03834 15.6069 2 12.7141 2C8.52353 2 4.90447 4.35665 3.14258 7.78662L6.60686 10.4233C7.47598 7.89166 9.88073 6.05997 12.7141 6.05997"
                        fill="#EB4335"
                    />
                </svg>
                <span>Log in com Google</span>
            </S.LoginWrapperButton>
            <S.LoginWrapperButton
                onClick={(e) => {
                    e.preventDefault();
                    methods.appleLogin();
                }}
                className="simple_hover"
            >
                <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M30.5 16.5C30.5 24.228 24.235 30.5 16.5 30.5C8.765 30.5 2.5 24.228 2.5 16.5C2.5 8.765 8.765 2.5 16.5 2.5C24.235 2.5 30.5 8.765 30.5 16.5Z"
                        fill="#333333"
                    />
                    <path
                        d="M23.0621 12.9574C22.9857 13.002 21.1671 13.9425 21.1671 16.0279C21.2528 18.4061 23.4621 19.2401 23.5 19.2401C23.4621 19.2847 23.1665 20.3763 22.2907 21.5205C21.5956 22.5062 20.8242 23.5 19.6528 23.5C18.5385 23.5 18.1385 22.8431 16.8528 22.8431C15.472 22.8431 15.0813 23.5 14.0242 23.5C12.8528 23.5 12.0242 22.453 11.2913 21.4766C10.3391 20.1986 9.52978 18.1931 9.50121 16.2675C9.48195 15.2471 9.69189 14.244 10.2248 13.3921C10.977 12.2026 12.3198 11.3952 13.7863 11.3686C14.9099 11.3333 15.9099 12.0875 16.5956 12.0875C17.2528 12.0875 18.4814 11.3686 19.8714 11.3686C20.4714 11.3692 22.0714 11.5376 23.0621 12.9574ZM16.5006 11.1649C16.3006 10.233 16.8528 9.30119 17.3671 8.70677C18.0242 7.98792 19.0621 7.5 19.9571 7.5C20.0143 8.43185 19.6522 9.34575 19.005 10.0114C18.4242 10.7302 17.4242 11.2714 16.5006 11.1649Z"
                        fill="white"
                    />
                </svg>
                <span>Log in com Apple</span>
            </S.LoginWrapperButton>
        </S.LoginWrapper>
    );
}