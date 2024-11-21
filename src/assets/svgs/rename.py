import os


def rename_files():
    # Use the current working directory (where this script is located)
    directory = os.getcwd()
    # Get the name of this script file
    script_name = os.path.basename(__file__)

    # Loop through each file in the current directory
    for filename in os.listdir(directory):
        # Skip directories, this script file, and files with names shorter than 2 characters
        if os.path.isfile(filename) and filename != script_name and len(filename) > 1:
            # Create the new filename with "x_" inserted after the first character
            new_filename = f"{filename[0]}x_{filename[1:]}"
            # Rename the file
            os.rename(filename, new_filename)
            print(f"Renamed '{filename}' to '{new_filename}'")


# Run the rename function
rename_files()
