import { TFunction } from "i18next";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function ContactUsForm({ t }: Readonly<{ t: TFunction }>) {
  return (
    <form
      name="diva-software-submissions"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="w-full p-4"
    >
      <input type="hidden" name="form-name" value="diva-software-submissions" />
      <div className="flex flex-col gap-6">
        <Input
          type="text"
          label={t("contactUs.form.fullName")}
          placeholder={t("contactUs.form.fullNamePlaceholder")}
          name="client-name"
          required
          className="focus:!border-black"
          variant="bordered"
          classNames={{
            label: "!text-black dark:!text-black",
            input: ["!text-black"],
          }}
        />
        <Input
          type="tel"
          label={t("contactUs.form.phone")}
          placeholder={t("contactUs.form.phonePlaceholder")}
          name="client-tel"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          variant="bordered"
          classNames={{
            label: "!text-black dark:!text-black",
            input: ["!text-black"],
          }}
        />
        <Input
          type="text"
          label={t("contactUs.form.company")}
          placeholder={t("contactUs.form.companyPlaceholder")}
          name="client-company"
          required
          variant="bordered"
          classNames={{
            label: "!text-black dark:!text-black",
            input: ["!text-black"],
          }}
        />
        <Input
          type="email"
          label={t("contactUs.form.email")}
          placeholder={t("contactUs.form.emailPlaceholder")}
          name="client-email"
          variant="bordered"
          required
          classNames={{
            label: "!text-black dark:!text-black",
            input: ["!text-black"],
          }}
        />
        <Textarea
          variant="bordered"
          label={t("contactUs.form.description")}
          placeholder={t("contactUs.form.descriptionPlaceholder")}
          name="client-message"
          rows={20}
          required
          classNames={{
            label: "!text-black dark:!text-black",
            input: ["!text-black"],
          }}
        />
        <Button size="lg" className="w-full" variant="shadow" type="submit">
          {t("contactUs.form.button")}
        </Button>
      </div>
    </form>
  );
}
