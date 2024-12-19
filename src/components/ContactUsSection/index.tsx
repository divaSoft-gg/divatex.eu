import { useTranslation } from "react-i18next";
import CentredLayout from "../ui/centredLayout";
import { locationProps } from "../../common/types";
import {
  CardDescription,
  CardHeader,
  CardList,
  ContactUsForm,
} from "@aymen_diva/diva-contact-form";
import { useTheme } from "../../hooks/useTheme";

export default function ContactUsSection() {
  const { t } = useTranslation();
  const location: locationProps[] = t("contactUs.places", {
    returnObjects: true,
  }) as locationProps[];
  const { theme } = useTheme();
  return (
    <section id="contact-us">
      <CentredLayout>
        <ContactUsForm theme={theme}>
          <CardHeader textSize="text5xl" title={t("contactUs.title")} />
          <CardDescription
            description={t("contactUs.description")}
            font="normal"
          />
          <CardList
            list={location}
            listTitle={t("contactUs.locationQuestion")}
            font="bold"
            listTextSize="lg"
            listFont="semiBold"
            elementListGap="small"
            paddingY="small"
          />
        </ContactUsForm>
      </CentredLayout>
    </section>
  );
}
