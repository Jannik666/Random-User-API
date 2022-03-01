export interface LocalesType {
  trans: {
    gender?: string;
    male?: string;
    female?: string;
    page?: string;
    results?: string;
    nationality?: string;
    phone?: string;
    email?: string;
    location?: string;
    lang?: string;
    changeTheme?: string;
    darkTheme?: string;
    lightTheme?: string;
  };

  toggleLang?: () => void;
}
