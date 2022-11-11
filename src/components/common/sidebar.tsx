import { FC } from "react";
import account from "../../images/svgs/account.svg";
import audit from "../../images/svgs/audits.svg";
import bank from "../../images/svgs/bank.svg";
import briefcase from "../../images/svgs/briefcase.svg";
import caretDown from "../../images/svgs/caret-down.svg";
import coins from "../../images/svgs/coins.svg";
import fees from "../../images/svgs/fees.svg";
import guarantors from "../../images/svgs/guarantors.svg";
import handshake from "../../images/svgs/hand-shake.svg";
import home from "../../images/svgs/home.svg";
import karma from "../../images/svgs/karma.svg";
import loanRequests from "../../images/svgs/loan-requests.svg";
import loans from "../../images/svgs/loans.svg";
import preferences from "../../images/svgs/preferences.svg";
import reports from "../../images/svgs/reports.svg";
import savings from "../../images/svgs/savings.svg";
import services from "../../images/svgs/services.svg";
import settlement from "../../images/svgs/settlement.svg";
import transactions from "../../images/svgs/transactions.svg";
import userFriends from "../../images/svgs/user-friends.svg";
import whiteList from "../../images/svgs/whitelist.svg";

const sidebarContents = [
  {
    main: "Switch Organization",
    leftIcon: briefcase,
    rightIcon: caretDown,
    sub: null,
    onClick: null,
  },
  {
    main: "Dashboard",
    leftIcon: home,
    rightIcon: null,
    sub: null,
    onClick: null,
  },
  {
    main: "Customers",
    leftIcon: null,
    rightIcon: null,
    sub: [
      {
        text: "Users",
        leftImg: userFriends,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Guarantors",
        leftImg: guarantors,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Loans",
        leftImg: loans,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Decision Models",
        leftImg: handshake,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Savings",
        leftImg: savings,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Loan Requests",
        leftImg: loanRequests,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Whitelist",
        leftImg: whiteList,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Karma",
        leftImg: karma,
        rightImg: null,
        onClick: null,
      },
    ],
    onClick: null,
  },
  {
    main: "Businesses",
    leftIcon: null,
    rightIcon: null,
    sub: [
      {
        text: "Organization",
        leftImg: briefcase,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Loan Products",
        leftImg: loanRequests,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Savings Products",
        leftImg: bank,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Fees and Charges",
        leftImg: coins,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Transactions",
        leftImg: transactions,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Services",
        leftImg: services,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Service Account",
        leftImg: account,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Settlements",
        leftImg: settlement,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Reports",
        leftImg: reports,
        rightImg: null,
        onClick: null,
      },
    ],
    onClick: null,
  },
  {
    main: "settings",
    leftIcon: null,
    rightIcon: null,
    sub: [
      {
        text: "Preferences",
        leftImg: preferences,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Fees and Pricing",
        leftImg: fees,
        rightImg: null,
        onClick: null,
      },
      {
        text: "Audit Logs",
        leftImg: audit,
        rightImg: null,
        onClick: null,
      },
    ],
    onClick: null,
  },
];

interface SidebarArrayContents {
  main: string | null;
  leftIcon: string | null;
  rightIcon: string | null;
  sub:
    | {
        text: string;
        leftImg: string | null;
        rightImg: string | null;
        onClick: Function | null;
      }[]
    | null;
  onClick: Function | null;
}

interface SidebarSubContents {
  text: string;
  leftImg: string | null;
  rightImg: string | null;
  onClick: Function | null;
}

export const Sidebar: FC<{ open: boolean }> = ({ open }) => {
  return (
    <div
      className={`${
        open ? "block w-2/25" : "d-none"
      } auth lg:block fixed top-0 bottom-0 left-0 lg:w-1/4 y-scroll pt-4-3r all-corn-box-shadow hide-scrollbar bg-white`}
    >
      {sidebarContents.map((item: SidebarArrayContents) => (
        <div className={`mb-10px ${item.sub ? "" : "link"}`}>
          <div
            className={`flex py-6px pl-2rem ${
              item.sub ? "mt-30px auto" : "mt-0 pointer"
            }`}
          >
            {item.leftIcon ? <img src={item.leftIcon} alt="briefcase" /> : null}
            <span className="title pri-text-color-faint mx-8px py-10px">
              {item.main}
            </span>
            {item.rightIcon ? (
              <img src={item.rightIcon} alt="caret-down" />
            ) : null}
          </div>
          <div>
            {item.sub
              ? item.sub.map((item_: SidebarSubContents) => (
                  <div className="flex py-6px pointer mb-10px link pl-60px">
                    {item_.leftImg ? (
                      <img src={item_.leftImg} alt="briefcase" />
                    ) : null}
                    <span className="text-secondary-color-thin mx-8px py-10px">
                      {item_.text}
                    </span>
                    {item_.rightImg ? (
                      <img src={item_.rightImg} alt="caret-down" />
                    ) : null}
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
};
