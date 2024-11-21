export interface SvgImage {
    first: string;        
    second: string;
    correct_img: number;  
}

export interface UserData {
    study_group: number,
    finished: boolean,
    aborted: boolean,
    survey_data: SurveyData,
    trials: TrialData[]
}

export interface SurveyData {
    device: string,
    concentration_before: number,
    concentration_after: number,
    age_group: number,
    dyslexia: boolean | null,
    dyscalculia: boolean | null
}

export interface TrialData {
    correct_img: number, 
    clicked_img: number,
    is_user_right: boolean,
    time: number
}

export const emptySurveyData: SurveyData = {
    device: "",
    concentration_before: -1,
    concentration_after: -1,
    age_group: -1,
    dyslexia: null,
    dyscalculia: null
}

export const initUserData: UserData = {
    study_group: Math.floor(Math.random() * 2) + 1,
    finished: false,
    aborted: false,
    survey_data: emptySurveyData,
    trials: []
}