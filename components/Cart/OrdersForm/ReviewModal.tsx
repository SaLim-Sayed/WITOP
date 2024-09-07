import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { Button, Input, Textarea } from "@nextui-org/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { showToast } from "@/components/Global/Ui/Toast";
import { useLocale, useTranslations } from "next-intl";
import { axiosInstance } from "@/util/axiosConfig";
import { useNavigation } from "@/util/useNavigation";

interface Props {
  onOpenChange: any;
  isOpen: any;
  onOpen: any;
}

const feedbackSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be no more than 5"),
  comment: z.string().min(5, "Comment must be at least 5 characters long"),
});
type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function ReviewModal({ onOpenChange, isOpen, onOpen }: Props) {
  const { navigateTo } = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  });

  const lang = useLocale();
  const t = useTranslations("reviewModal");

  const [isLoading, setIsLoading] = useState(false);

  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });

  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });

  const onSubmit = async (data: FeedbackFormData) => {
    console.log(data);
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(
        `/feedback/add`,
        { ...data },
        {
          headers: {
            language: lang || "en",
          },
        }
      );
      console.log({ res });
      onOpenChange(false);
      setIsLoading(false);

      navigateTo("/orders");

      showSuccessToast(t("successMessage"));
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    navigateTo("/orders");
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("title")}
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  {/* Rating Input */}
                  <div>
                    <label>{t("ratingLabel")}</label>
                    <Input
                      {...register("rating", { valueAsNumber: true })} // Treat input as a number
                      type="number"
                      min={1}
                      max={5}
                      variant="bordered"
                      isInvalid={errors.rating ? true : false}
                      errorMessage={errors.rating?.message}
                    />
                  </div>

                  {/* Comment Input */}
                  <div>
                    <label>{t("commentLabel")}</label>
                    <Textarea
                      {...register("comment")}
                      variant="bordered"
                      placeholder={t("commentPlaceholder")}
                      isInvalid={errors.comment ? true : false}
                      errorMessage={errors.comment?.message}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" isLoading={isLoading}>
                    {t("submitBtn")}
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
