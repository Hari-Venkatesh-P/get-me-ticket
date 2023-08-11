import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

interface HVCardProps {
  id: string;
  cardStyles?: any;
  isCardImageURL?: string;
  cardTitle?: string;
  cardSubTitle?: string;
  cardBodyText?: string;
  onCardPress?: (id: string) => void;
  isCardFooterRequired?: boolean;
}

export default function HVCard(props: HVCardProps) {
  const {
    id,
    cardStyles = {},
    isCardImageURL = "",
    cardTitle = "",
    cardSubTitle = "",
    cardBodyText = "",
    onCardPress = (_) => {},
    isCardFooterRequired = true,
  } = props;

  return (
    <Card sx={{ ...cardStyles }}>
      {(cardTitle.length > 0 || cardSubTitle.length > 0) && (
        <CardHeader
          title={cardTitle}
          subheader={cardSubTitle}
          sx={{ minHeight: 120, marginTop: -1 }}
          titleTypographyProps={{ variant: "h6" }}
          subheaderTypographyProps={{ variant: "caption" }}
        />
      )}
      {isCardImageURL.length > 0 && (
        <CardMedia
          component="img"
          height="200"
          image={isCardImageURL}
          alt="Imag*"
          sx={{ objectFit: "fill" }}
        />
      )}
      {cardBodyText.length > 0 && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {cardBodyText}
          </Typography>
        </CardContent>
      )}
      {isCardFooterRequired && (
        <CardActions>
          <Button size="small" onClick={() => onCardPress(id)}>
            View More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
