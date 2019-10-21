import React, { useEffect, useContext } from "react";
import { AppContext } from "../components/AppContext";
import { RouteComponentProps } from "@reach/router";

interface ICatDetailsProps extends RouteComponentProps {
  catId?: string;
  data: any;
  children:any
}

const AppContextConsumer = (props: any) => {
  return (
    <AppContext.Consumer>
      {(appState: any) => (
        <div>
          {props.children}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default AppContextConsumer;
