import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Box, Button, ButtonGroup, TextField, Zoom } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Stack, Avatar } from "@mui/material";
import child from "../assets/child1.jpg";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";

/*
  - Tooltip مكوم بيقبل بداخله ايكون او زر اوي نص وفايدتها تكمن في لما بعمل هوافير علي الي جواها بيظهر زي عنوان لشرح ما هذا
  --- props 
  ---- title المحتوي الي هيظهر للناس علي شكل عنوان
  ---- arrow بتعمل زي سهم يشير علي العنوان
  ----- classes  للتنسيقات بي ال سي اس اس
  ----- sx  للتنسيقات باستخدام ال ستايل
  ---- enterDelay بتخلي العنوان ياخد وقت علي ما يظهر بعد ما اقف علي العنصر بالملي ثانيه
  ---- leaveDelay بتخلي العنوان ياخد وقت علي ما يختفي بعد ما ابعد عن العنصر بالملي ثاني
  ---- TransitionComponent بتقبل مني عنصر من عناصر الام يو ايه وبيعبر عن شكل الانيماشن الي هيتعرض ليه العنوان وموجودين علي الموقع مش شرط تحفظهم
  ---- TransitionProps بتعبر عن الفتره الزمانيه لي هياخدها العنوان عشان يظهر بشكل في انيماشن بالمي ثانيه
  ---- followCursor بتخلي العنوان يفضل يتابع السهم الي بحركه علي العنصر بتاعي 
  ---- disableHoverListener لما بقف علي العنصر مش بتخلي العنوان يظهر وهي واخده فولس تلقائي لو ترو مش هيظهر
  ---- placement بتقبل مني 12 نص بيعبر عن مكان ظهور العنوان بتاعي بالنسبه للعنصر هل فوقه تحته وهكذا 
  ---- slotProps بتخلني احدد العنوان بتاعي هيكون بعيد قد اي من العنصر والكود بالاسفل موضح  الفكره الصفر الاول بيعبر عن حركته علي محور اكس والقيمه الاخري بتعبر عن حركته بالنسبه في محور واي

  - Fab (Floating Action Button) بيعمل شكل من الايكون كامل لاضافه او عمل امر ما
  --- props
  ----- classes  للتنسيقات بي ال سي اس اس
  ----- sx  للتنسيقات باستخدام ال ستايل 
  ----- color شكل الباك جروند بتاع الايكون وليها انواع كتيره موجوده علي الموقع مش لازم تحفظها
  ---- component [Button default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه
  ----- disabled بتخلي الزر بتاعي والايكون الي جواه غير صالحين للاستخدم شكل بس
  ----- disableRipple	بتلغي شكل التموج الي بيحصل في حاله الضغط علي الزر
  ----- href بتقبل مني للينك علي شكل استرنج عشان تفتحه
  ----- size ["small" | "medium" | "large" default] حجم الزر والايكون وليها تلت قيم
  ----- variant [	'circular' default | 'extended'] شكل الزر لامه علي شكل دائره او شكل كبسوله لجعل العناصر جمب بعض

  - Modal: بيخلني اصمم جواه شكل يو اي بيتم فتحه وقفل بشكل بوب كده او نافذه لاعطاء معلومات وقفلها
  --- props
  ----- classes  للتنسيقات بي ال سي اس اس
  ----- sx  للتنسيقات باستخدام ال ستايل 
  ----- open لو ترو بيفتح البوب بتاعتي لو غلط بيقفلها
  ----- onClose فانكشن لقفل البوب بتاعي عند الضغط علي اي شي غير الموديل بتاعي
  ---- component [div default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه
  ----- وفي عناصر تاني علي الموقع ولكن دي اهمها 

  - ButtonGroup: بيخلني اقدر اعمل موجوعه من الزاير مع بعض في شكل واحد سوء جمب بعض او تحت بعض
  --- props 
  ---- color [inherit | primary default | secondary | error | info | success | warning] لو الزرار وليه اكتر من لون وهم
  ---- component [div default] لتغير اسم العنصر بتاعي باي عنصر اتش ام ال انا عايزه
  ---- disabled بتخلي الزراير غير قابله للضغط وبتقبل ترو وي فولس
  ---- disableRipple في حاله الضغط علي الزر في زي انتمشان علي شكل موجه بتحصل في الباك جروند هو بيمنعها
  ---- fullWidth لو استخدمتها ف كل زرار هياخد مساحته الكليه بتاعت الاب بشكل متساوي
  ---- orientation [horizontal default | vertical] بتحدد شكل الازرار هيكون افقي ولا راسي
  ---- size [small | medium default | large] بتحدد حجم الزر 
  ---- variant [contained | outlined default | text] بتحدد شكل الزر هل هو بباك جروند كامله شبه الكونتانير ولا محوط بي بوردر كده بس ومن غير باك جروند او علي شكل كلام وبس 
  ----- sx  للتنسيقات باستخدام ال ستايل 
*/

export default function AddPost() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: 400 },
    bgcolor: theme.palette.background.default,
    padding: "22px",
    borderRadius: "6px",
  };

  const icons = [
    { title: "Add Emoji", icon: <EmojiEmotionsIcon color="primary" /> },
    { title: "Add Image", icon: <ImageIcon color="secondary" /> },
    { title: "Add Video", icon: <VideoCameraBackIcon color="success" /> },
    { title: "Add Friend", icon: <PersonAddIcon color="error" /> },
  ];

  return (
    <>
      <Tooltip
        sx={{ position: "fixed", bottom: "25px", left: "25px" }}
        title="Add Post"
        arrow
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -5],
                },
              },
            ],
          },
        }}
      >
        <Fab color="primary" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" align="center" mb="1rem">
            Create a post
          </Typography>

          <Stack
            spacing={2}
            direction="row"
            flexWrap="wrap"
            alignItems="center"
          >
            <Avatar alt="Child" src={child}></Avatar>
            <Typography variant="body1">Layla Hassan</Typography>
          </Stack>

          <TextField
            fullWidth
            placeholder="What is in your mind..."
            sx={{ mt: "1.5rem", display: "block" }}
            variant="standard"
            multiline
            rows={3}
          />

          <Stack spacing={1} direction="row" my={3}>
            {icons.map((icon) => (
              <Tooltip
                key={icon.title}
                sx={{ cursor: "pointer" }}
                title={icon.title}
                placement="top"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 300 }}
              >
                {icon.icon}
              </Tooltip>
            ))}
          </Stack>

          <ButtonGroup
            sx={{ width: "100%" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ flexGrow: "1" }}>Post</Button>
            <Button size="small">
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
