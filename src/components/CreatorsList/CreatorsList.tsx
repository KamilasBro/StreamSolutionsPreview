import YtSvg from "../../utils/socials/yt";
import TtvSvg from "../../utils/socials/ttv";
import IgSvg from "../../utils/socials/ig";
import KickSvg from "../../utils/socials/kick";
import TiktokSvg from "../../utils/socials/tiktok";
import placeHolderImg from "../../assets/images/placeholders/creator.png";
import { CreatorsListProps } from "../../interfaces/CreatorsInterface";

import "./creatorsList.scss";
const CreatorsList: React.FC<CreatorsListProps> = ({ data }) => {
  return (
    <div className="creators" id="creators">
      <h3>Nasi Twórcy</h3>
      <ul className="creators-list">
        {data.map((e, index) => {
          return (
            <li className="creators-list-item" key={"creator" + index}>
              <img
                src={
                  e.imgName
                    ? require(`../../data/creators/images/${e.imgName}`)
                    : placeHolderImg
                }
                alt="creatorImg"
              />
              <h4 className="nickName">{e.nickName}</h4>
              <h4 className="fullName">{e.fullName}</h4>
              <div className="socials d-flex align-items-center justify-content-center">
                {e.socials.youtube && (
                  <YtSvg fillColor="white" url={e.socials.youtube} />
                )}
                {e.socials.twitch && (
                  <TtvSvg fillColor="white" url={e.socials.twitch} />
                )}
                {e.socials.ig && <IgSvg fillColor="white" url={e.socials.ig} />}
                {e.socials.kick && (
                  <KickSvg fillColor="white" url={e.socials.kick} />
                )}
                {e.socials.tiktok && (
                  <TiktokSvg fillColor="white" url={e.socials.tiktok} />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CreatorsList;
