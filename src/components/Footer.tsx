import {
  AlertTriangle,
  Bell,
  ChevronsRightLeft,
  UserCog,
  XCircle,
} from "lucide-react";
import { ApplePodcastsLogo, ClockCounterClockwise } from "phosphor-react";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <ChevronsRightLeft style={{ color: "gold" }} />
        <div className="infos-left-footer">
          <XCircle size={20} />
          <span>0</span>
          <AlertTriangle size={20} />
          <span>0</span>
        </div>
      </div>
      <div className="right-footer">
        <a href="">
          <ApplePodcastsLogo />
          Go Live
        </a>
        <a href="">
          <ClockCounterClockwise />
          39m
        </a>
        <ClockCounterClockwise />
        <UserCog />
        <Bell />
      </div>
    </div>
  );
}
