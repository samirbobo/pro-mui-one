import { Box, Checkbox, ListSubheader, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@emotion/react";

/*
  - ImageList مكون بيحتوي علي مجموعه من العناصر علي شكل صور ومنسقه باستخدام الجراد
  --- props:
  ----- classes  للتنسيقات بي ال سي اس اس
  ----- sx  للتنسيقات باستخدام ال ستايل
  ----- cols لتحديد عدد الاعمده الي هتتعمل وتلقائي واخد عمودين
  ---- component [ul default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه
  ----- gap [4px default]  لعمل مسافه بين عناصر الجرد
  ----- rowHeight هنا بتقبل رقم وبيعبر عن ارتفاع الصف يعني ارتفاع الصوره ولو محدتش جواه قيمه الصف هياخد طول الصوره تلقائي
  ----- variant بتحدد الشكل العام لظهور الصور وفي منها انواع كتير وهنطبق علي اول نوع بس والباقي موجود علي الموقع الرسمي
  ------- masonry
  ------- quilted
  ------- standard [Default]
  ------- woven

  - ImageListItem بتعبر عن العنصر الي في كل صف
  --- props:
  ----- classes  للتنسيقات بي ال سي اس اس
  ----- sx  للتنسيقات باستخدام ال ستايل
  ---- component [li default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه
  ----- cols لتحديد عدد الاعمده الي هتتعمل وتلقائي واخد عمود
  ----- rows لتحديد عدد الصفوف الي هتتعمل وتلقائي واخد صف

  - ImageListItemBar دا عشان اضيف محتوي علي الصوره بتاعتي
  --- props:
  ----- classes  للتنسيقات بي ال سي اس اس
  ----- sx  للتنسيقات باستخدام ال ستايل
  ----- actionPosition بتعرفني مكان الايكون الي هحطه علي الصوره هيكون يمين ولا شمال
  ----- actionIcon دي بتقبل جواها مكون اسمه ايكون بوتن وبحطه جواه الايكون الي انا عايزها عشان تظهر علي الصوره
  ----- position بتعرفني مكان العنوان او الايكون او اي حاجه عايز احطها علي الصوره هتكون في اعلي الصوره ولا في الاسفل
  ----- title العنوان الي هحطه علي الصوره
  ----- subtitle العنوان الفرعي وبيكون لونه اخف من لون العنوان الاصلي
*/

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("sm"));

  let cols = 1; // Default to 1 column for mobile screens
  if (isMediumScreen) {
    cols = 2; // 2 columns for medium screens
  }
  if (isLargeScreen) {
    cols = 3; // 3 columns for large screens
  }

  return (
    <Box sx={{ width: "90%", maxWidth: "800px" }}>
      <ImageList
        gap={16}
        sx={{
          width: "100%",
          overflowY: "hidden",
          mb: "4rem",
        }}
        cols={cols}
        // rowHeight={250} // لو حذفتها الصوره هتاخد طولها بالكامل بشكل تلقائي ومش هتقص حاجه من الصوره
      >
        <ImageListItem key="Subheader" cols={cols}>
          <ListSubheader component="h3" sx={{ fontSize: "1.5rem" }}>
            standard
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ borderRadius: "5px" }}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList
        sx={{
          width: "100%",
          overflowY: "hidden",
          transform: "translateZ(0)",
          mb: "2rem",
        }}
        rowHeight={250}
        gap={0}
      >
        <ImageListItem
          key="Subheader"
          cols={2}
          sx={{ height: "48px !important", mb: "0.5rem" }}
        >
          <ListSubheader component="h3" sx={{ fontSize: "1.5rem" }}>
            Custom image list
          </ListSubheader>
        </ImageListItem>

        {itemData2.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <Checkbox
                    size="large"
                    sx={{color: "white"}}
                    icon={<StarBorderIcon />}
                    checkedIcon={<StarIcon />}
                  />
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
