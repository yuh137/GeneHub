import React from "react";
import { ConfigProvider } from "antd";

const AntDThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ConfigProvider
			theme={{
				components: {
					Pagination: {
						colorPrimaryBorder: "#005555",
						itemSize: 48
					}
				}
			}}
		>
			{children}
		</ConfigProvider>
  );
};

export default AntDThemeProvider;
