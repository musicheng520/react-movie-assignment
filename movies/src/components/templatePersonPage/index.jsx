import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MovieHeader from "../headerMovie";

const TemplatePersonPage = ({ person, children }) => {
  const profile = person?.profile_path
    ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
    : "/film-poster-placeholder.png";

  const headerModel = { title: person?.name || "Person" };

  return (
    <>
      <MovieHeader movie={headerModel} />

      <Grid
        container
        spacing={3}
        sx={{
          padding: "24px",
          flexWrap: "nowrap", // ✅ 永远并排不换行
          alignItems: "flex-start",
        }}
      >
        {/* 左侧头像 */}
        <Grid
          item
          sx={{
            flex: "0 0 300px", // ✅ 固定宽度
            maxWidth: "300px",
          }}
        >
          <img
            src={profile}
            alt={person?.name}
            style={{
              width: "100%",
              borderRadius: 12,
              objectFit: "cover",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            }}
          />
        </Grid>

        {/* 右侧信息区域 */}
        <Grid
          item
          sx={{
            flex: "1 1 auto",
            paddingLeft: "24px",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;
