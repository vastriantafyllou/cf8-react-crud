import {Input} from "@/components/ui/input.tsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {productSchema} from "@/schemas/products.ts";
import {Textarea} from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {Button} from "@/components/ui/button.tsx";

const ProductPage = () => {

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(productSchema.omit({id: true})),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      image: "",
      price: 0,
      sort: 0,
      is_active: false,
      is_favorite: false,
    }
  });

  return(
    <>
      <form
      // onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-12 p-8 border rounded-md space-y-6"
      autoComplete="off"
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")}/>
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" {...register("slug")}/>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" {...register("description")}/>
        </div>
        <div>
          <Label htmlFor="image"></Label>

          <Input {...register("image")}/>
        </div>
        <div>
          <Input {...register("price")}/>
        </div>
        <div>
          <Input {...register("sort")}/>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={watch("is_active")}
            onCheckedChange={(value) => setValue("is_active", value)}
            id="is-active" />
          <Label htmlFor="is-active">Is Active</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            checked={watch("is_favorite")}
            onCheckedChange={(value) => setValue("is_favorite", value)}
            id="is-favorite" />
          <Label htmlFor="is-favorite">Is Favorite</Label>
        </div>

        <Button disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>





      </form>

    </>
  )
}

export default ProductPage;