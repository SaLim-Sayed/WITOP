import { showToast } from "@/components/Global/Ui/Toast";
import { useSetter } from "@/store/hooks/clientApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Button, Input } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  onOpenChange: any;
  isOpen: any;
  onOpen: any;
  orderId?: any;
  orderDetails?: any;
  product?: any;
}

const ReturnSchema = z.object({
  message: z.string().min(5, "Comment must be at least 5 characters long"),
});
type ReturnFormData = z.infer<typeof ReturnSchema>;

export default function ReturnModal({
  onOpenChange,
  isOpen,
  onOpen,
  orderId,
  orderDetails,
  product,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReturnFormData>({
    resolver: zodResolver(ReturnSchema),
  });

  const lang = useLocale();
  const t = useTranslations("returnModal");

  const [isLoading, setIsLoading] = useState(false);

  const showSuccessToast = (message?: string) =>
    showToast({ type: "success", toastMessage: message });

  const showErrorToast = (message?: string) =>
    showToast({ type: "error", toastMessage: message });
  const { mutate, error, isSuccess, data } = useSetter({
    endPoint: "/return/returnRequest",
    key: "returnRequest",
  });

  const onSubmit = async (data: ReturnFormData) => {
    console.log(data);
    try {
      setIsLoading(true);
      mutate({
        orderID: orderId,
        productName: product?.productName,
        message: data.message,
        phoneNumber: orderDetails?.userPhone,
      });

      onOpenChange(false);
      setIsLoading(false);
      if (isSuccess) {
        showSuccessToast(data.message);
        onOpenChange(false);
      }
    } catch (error: any) {
      console.log(error);
      showErrorToast(error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
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
                    <label>{t("message")}</label>
                    <Input
                      {...register("message")} // Treat input as a number
                      variant="bordered"
                      isInvalid={errors.message ? true : false}
                      errorMessage={errors.message?.message}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button className=" bg-cyan-500 text-white" type="submit" isLoading={isLoading}>
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
