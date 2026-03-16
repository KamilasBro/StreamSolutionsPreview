interface Creator {
  nickName: string;
  fullName: string;
  imgName: string;
  socials: Socials;
}

interface Socials {
  youtube?: string;
  twitch?: string;
  ig?: string;
  kick?: string;
  tiktok?: string;
}

export interface CreatorsListProps {
  data: Creator[];
}
