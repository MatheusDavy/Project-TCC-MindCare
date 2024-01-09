import { FormsComp } from 'src/components/Pages/dashboard/settings/Forms/Forms.comp';
import * as S from './Settings.style';

export function SettingsView() {
    return (
        <S.Section>
            <FormsComp />
        </S.Section>
    );
}
