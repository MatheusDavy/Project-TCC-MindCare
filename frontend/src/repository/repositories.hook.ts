/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import {
    AuthRepository,
    UserRepository,
    ChatbotRepository,
    FriendsRepository,
    LearnRepository,
} from './API';

export function useRepository () {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

    return {
        authRepository: useCallback(() => AuthRepository({ baseUrl }), [])(),
        userRepository: useCallback(() => UserRepository({ baseUrl }), [])(),
        chatbotRepository: useCallback(() => ChatbotRepository({ baseUrl }), [])(),
        friendsRepository: useCallback(() => FriendsRepository({ baseUrl }), [])(),
        learnRepository: useCallback(() => LearnRepository({ baseUrl }), [])(),
    };
}
